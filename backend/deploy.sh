#!/bin/bash

set -o errexit  # Exit on error
set -o nounset  # Trigger error when expanding unset variables

case "$1" in
    stage|production)
        ENV=$1
        ;;
    *)
        echo "Error: You need to pass a valid environment! (stage or production)"
        exit 1
        ;;
esac

PROJECT="/usr/local/share/placeholder/backend"

echo "Starting deploy of placeholder $ENV instance..."

echo "Preparing python environment..."
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
echo "Done!"

echo "Installing requirements..."
make -C $PROJECT install > /dev/null
echo "Done!"

echo "Setting up django settings..."
export DJANGO_SETTINGS_MODULE="placeholder.settings_$ENV"
ln -sf /etc/placeholder/settings_$ENV.py $PROJECT/placeholder/settings_$ENV.py
echo "Done!"

echo "Migrating database..."
python $PROJECT/manage.py migrate --noinput > /dev/null
echo "Done!"

echo "Collecting static files..."
python $PROJECT/manage.py collectstatic --noinput > /dev/null
echo "Done!"

echo "Finished deployment of placeholder $ENV instance..."

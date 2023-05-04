# I-am-Mobile-Friendly

live at [iammobilefriendly.dev](https://iammobilefriendly.dev/)

Django REST Framework backend, with a React + tailwind frontend.
Deployed on Linux Ubuntu with nginx and gunicorn.
PostgreSQL database.

## Setup

### Backend

1. Create a virtual environment and activate it
2. cd into the backend folder
3. Install the requirements with `pip install -r requirements.txt`
4. Create production-settings.py file with required environment variables (import settings.py and override the variables you need)

### Frontend

1. cd into the frontend folder
2. Install the requirements with `npm install`

## Run

### Backend

1. cd into the backend folder
2. Run the server with `python manage.py runserver`

### Frontend

1. cd into the frontend folder
2. Run the server with `npm start`

## Deployment

### Backend

1. cd into the backend folder
2. Run the server with `python manage.py collectstatic`
3. Run the server with `gunicorn --bind

### Frontend

1. cd into the frontend folder
2. Run the server with `npm run build`

React build files will be in the build folder, 
django with nginx will serve them, make sure to set the 
static files path in production-Settings.py, and the nginx config file.

## Contact

[LinkedIn](https://www.linkedin.com/in/rp42/)

[Email](mailto:rp43dev@gmail.com)

[Portfolio](https://rp42.dev/) | [Portfolio 2](https://rp42.cloud/) | [Portfolio 3](https://iammobilefriendly.dev/)

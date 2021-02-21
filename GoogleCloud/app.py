#regiser
# if not registersd -> register, questtionaire (firebase_admin.db)
# if they are registered -> sign in -> matches nearby friends based on interest with ML
# when logged in -> find a way to save msg['idToken'] in Flask currest session -> verifyIDToken to get the user -> then connect to database with unique id
# maybe a chat

import os
from firebase_admin import auth, initialize_app, credentials, firestore
from firebase_admin.auth import UserRecord, create_user
from flask import Flask, redirect, request, jsonify, render_template, make_response, session
from dotenv import load_dotenv
load_dotenv()
app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET_KEY")

import json
import requests

cred = credentials.Certificate('key.json')
firestore_app = initialize_app(cred)
firestore_db = firestore.client(firestore_app)

FIREBASE_WEB_API_KEY = os.getenv("FIREBASE_WEB_API_KEY")
rest_api_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"

def register_new_user(email: str, display_name:str, password:str, data:json) -> UserRecord:
    if len(email) == 0 or len(display_name) == 0 or len(password) == 0 or len(data) == 0:
        return False

    email = "323@gmail.com"
    password = "password"
    display_name = "tester"
    #Create new user when all tests passed,
    UserRecord = create_user(email=email,display_name=display_name, password=password)

    data = {
            "Rock": 3,
            "Classical music": 3,
            "Romantic": 3,
            "Cars": 3,
            "Celebrities": 3,
            "Art exhibitions": 3,
            "Theatre": 3,
            "Musical instruments": 3,
            "Law": 3,
            "Dance": 3,
            "Science and technology": 3,
            "Physics": 3,
            "Foreign languages": 3,
            "Reliability": 3,
            "Decision making": 3,
            "Movies": 3,
            "Elections": 3,
            "Self-criticism": 3,
            "Hypochondria": 3,
            "Judgment calls": 3,
            "Empathy": 3,
            "Eating to survive": 3,
            "Giving": 3,
            "Compassion to animals": 3,
            "Borrowed stuff": 3,
            "Loneliness": 3,
            "Cheating in school": 3,
            "Health": 3,
            "Changing the past": 3,
            "Appearence and gestures": 3,
            "God": 3,
            "Dreams": 3,
            "Charity": 3,
            "Number of friends": 3,
            "Prioritising workload": 3,
            "Storm": 3,
            "Rats": 3,
            "Flying": 3,
            "Darkness": 3
        }
    firestore_db.collection(u'users').document(email).set(data)

    #set cookies
    session['idToken'] = UserRecord.uid
    print('session cookie')
    print(session['idToken'])
    session['isLoggedIn'] = True
    return True

def sign_in_with_email_and_password(email: str, password: str, return_secure_token: bool = True):
    payload = json.dumps({
        "email": email,
        "password": password,
        "returnSecureToken": return_secure_token
    })

    r = requests.post(rest_api_url,
                      params={"key": FIREBASE_WEB_API_KEY},
                      data=payload)

    return r.json()


@app.route('/profile', methods=['POST','GET'])
def access_restricted_content():
    if(session['isLoggedIn']):
        uid = session['idToken']
        user = auth.verify_id_token(uid)
        return json.dumps({'you are logged in! and in profile page':user['email']}) ##replace with React
    return flask.redirect('/login')


@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')  ##replace with React

@app.route('/login', methods=['POST'])
def login():
    email = request.form["email"]
    password = request.form["password"]

    email = "test@gmail.com" #dev only
    password = "fakepassword"

    msg = sign_in_with_email_and_password(email, password)
    if('idToken' in msg):
        session['idToken'] = msg['idToken']
        session['isLoggedIn'] = True
        user = auth.verify_id_token(session['idToken'])

        return json.dumps({'you are logged in!':user['email']}) ##replace with React
    else:
        return json.dumps({'you are not logged in!':"you may be redirected"})  ##replace with React


@app.route('/logout', methods=['GET','POST'])
def logout():
    session.pop('idToken', None)
    session.pop('isLoggedIn', None)
    return render_template('login.html')  ##replace with React

@app.route('/register', methods=['POST'])
def register_user_function():
    email = request.form["email"]
    password = request.form["password"]
    name = request.form["name"]
    data = request.form["data"]
    success = register_new_user(email,name,password,data)
    if success:
        return redirect('/profile')
    else:
        return redirect('/register')



@app.route('/register', methods=['GET'])
def register_page():
    return render_template('register.html')  ##replace with React


@app.route('/', methods=['GET'])
def default_page():
    return render_template('login.html')  ##replace with React

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

    # dummy_email = "test@gmail.com"
    # dummy_password = "fakepassword"
    # dummy_name = "Perseverance"

    # user = sign_in_with_email_and_password(dummy_email, dummy_password)
    # session = auth.create_session_cookie(user['idToken'],3600)
    # print(session)

    # print("")
    #
    # print('bad login test')
    # msg = sign_in_with_email_and_password(dummy_email, dummy_password)
    # print(msg)
    #
    # print("")
    #
    # print('registering a new user ')
    # new_user: UserRecord = register_new_user(dummy_email, dummy_name, dummy_password)
    # print(f"Firebase successfully created a new user with email - {new_user.email} and user id - {new_user.uid}")
    #
    # print("")

from flask import Flask

api = Flask(__name__)

@api.route('/api/profile', methods=['GET'])
def profile():
    aboutMe = {
        "name": "Stephen Keane",
        "bio": "learning a bit of Flask and connecting it to a React App"
    }
    return aboutMe

if __name__ == '__main__':
    api.run(port=8000, debug=True)
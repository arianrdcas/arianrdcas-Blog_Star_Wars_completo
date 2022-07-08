import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, render_template, request, jsonify
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['DEBUG'] = os.getenv('DEBUG')
app.config['ENV'] = os.getenv('ENV')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' # 'sqlite:////D:/ProyectosArian/login_con_jwt/backend/env/code.db'
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY') #'1061bb40ea99675d095192c6ea8f9f54' # arian

""" //db.init_app(app) """
jwt = JWTManager(app)
Migrate(app) # db
CORS(app)
manager = Manager(app)
#manager.add_command('db', MigrateCommand) # init migrate upgrade


@app.route("/")
def main():
    return render_template('index.html')




if __name__ == '__main__':
    manager.run()
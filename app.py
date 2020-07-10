from flask import Flask, send_file
from flask import render_template

app = Flask(__name__)

@app.route("/episodes/<e>")
def episode(e):
	return render_template("episode.html", episode=e)

@app.route("/stats")
def stats():
	return send_file('/home/The-Polarized-Sunglass-Podcast/static/script/stats.json')

@app.route("/about")
def about():
	return render_template('about.html')

@app.route("/")
def index():
	return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0')

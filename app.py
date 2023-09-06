from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")

@app.route("/")
def home():
    return render_template("main.html")

@app.route("/addCar")
def pageAddCar():
    return render_template("addCar.html")

@app.route("/remCar")
def pageRemCar():
    return render_template("remCar.html")

@app.route("/viewCar")
def pageViewCar():
    return render_template("viewCar.html")


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_numbers')
def get_numbers():
    # Генерируем 6 уникальных случайных чисел от 1 to 6 (можно поменять диапазон)
    numbers = random.sample(range(1, 7), 6)
    return jsonify(numbers)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
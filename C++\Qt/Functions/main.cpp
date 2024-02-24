#include <QCoreApplication>
#include <QDebug>

double add(double a, double b) {
    return a + b;
}

double sub(double a, double b) {
    return a - b;
}

double mul(double a, double b) {
    return a * b;
}

double div(double a, double b) {
    if (b == 0) {
       qWarning() << "Division by zero!";
        return 0;
    }
    return a / b;
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);
    double num1 = 10.0;
    double num2 = 2.0;

    qDebug() << "Addition: " << add(num1, num2);
    qDebug() << "Subtraction: " << sub(num1, num2);
    qDebug() << "Multiplication: " << mul(num1, num2);
    qDebug() << "Division: " << div(num1, num2);
    qDebug() << "Attempt to divide by zero: " << div(num1, 0.0);

    return a.exec();
}

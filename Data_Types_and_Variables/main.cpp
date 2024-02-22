#include <QCoreApplication>
#include <QDebug>

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    int i = 8;
    float f = 3.14;
    double d = 7.23484573;
    char ch = 'A';
    bool b = true;

    qDebug() << "int = " << i;
    qDebug() << "float = " << f;
    qDebug() << "double = " << d;
    qDebug() << "char = " << ch;
    qDebug() << "bool = " << b;

    return a.exec();
}

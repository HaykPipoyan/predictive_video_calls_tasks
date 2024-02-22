#include <QCoreApplication>
#include <QTextStream>

int main(int argc, char *argv[])
{
    QCoreApplication app(argc, argv);
    QTextStream cout (stdout);
    QTextStream cin (stdin);

    int number;
    cout << "enter a number 0-100: \n";
    cout.flush();
    cin >> number;

 //   if (cin.status() != QTextStream::Ok) {
 //     cout << "Invalid input." << Qt::endl;
 //       return 1;
 //   }

    if(number < 0) {
        cout << "a negative number" << Qt::endl;
    } else if (number > 0) {
        cout << "a positive number" << Qt::endl;
    } else {
        cout << "The number is zero" << Qt::endl;
    }
    char grade;
    switch (number / 10) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    cout << "your grade: " << grade << Qt::endl;

    cout << "numbers from 1 to 10: " << Qt::endl;;
    for(int i = 1; i <= 10; ++i) {
        cout << i << " ";
    }
    cout << Qt::endl;

    return app.exec();
}

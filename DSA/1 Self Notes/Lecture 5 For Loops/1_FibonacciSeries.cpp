#include <iostream>
using namespace std;

int main (){
    int n,i,a=0,b=1;
    cin>>n;

    cout<<a<<' '<<b<<' ';
    for(i=1;i<=n-2;i++){
        int sum=a+b;
        cout<<sum<<' ';
        a=b;
        b=sum;
    }
}
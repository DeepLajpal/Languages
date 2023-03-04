#include <iostream>
using namespace std;



void SwapAlternate(int arr[], int size){
    int First = 0;
    int Second = 1;
    while(Second<size){
        swap(arr[First],arr[Second]);
        First+=2;
        Second+=2;
    }
}

int main(){
    int size = 9;
    int arr[size]={2,8,7,6,4,5,3,6,9};
    SwapAlternate(arr,size);
    for (int i = 0 ; i < size ; i ++){
        cout<<arr[i]<<" ";
    }
}
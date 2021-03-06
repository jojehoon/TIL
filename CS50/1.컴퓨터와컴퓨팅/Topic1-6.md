
# Topic6 : 16진수


## 16진수 (Hexadecimal)
 - 10진수가 전체 10개의 크기를 한 숫자 단위로 표현하듯, 전체 16개의 크기를 한 단위 숫자로 표현하는 수치 방식
 - 컴퓨터는 데이터를 처리하기 위해 16진수를 사용하면 10진수보다 2진수를 간단하게 나타낼 수 있다
 - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A(10), B(11), C(12), D(13), E(14), F(15)

## 10진수를 16진수로 바꾸어보기
 - JPG 이미지 파일은 항상 10진수 255 216 255로 시작된다
 - 컴퓨터는 0, 1만을 이해할 수 있기 때문에 10진수로 된 표현을 2진수로 변환한다
 - 2^4는 16이기 때문에 4Bit씩 두 덩어리로 나누어 보면 0000 부터 1111까지 16진수로 표현 가능
 - 4Bit씩 16진수로 변환 후 0x를 붙여 뒤에 오는 문자들이 16진수임을 알려준다
![이미지](https://cphinf.pstatic.net/mooc/20170807_218/1502072784893AgAug_PNG/5.4_-01.png)

 ## 16진수의 유용성
 - ASCII 코드에 의해 'A, B ,C'는 16진수로 '65, 66, 67'에 해당
 - 컴퓨터는 10진수를 이해할 수 없으므로 2진수로 표현하면 01000001, 01000010, 01000011 인데 길이가 길어지기 때문에 16진수로 표현하면 2진수로 표현했을 때 보다 훨씬 간단하다
 - 컴퓨터는 8개의 Bit가 모인 1Byte 단위로 정보를 표현하며, 2개의 16진수는 1Byte의 2진수로 변환 되기 때문에 정보를 표현하기 매우 유용
![이미지](https://cphinf.pstatic.net/mooc/20170807_161/1502072871106NqRxw_PNG/5.4_-02.png)

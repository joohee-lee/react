# React

# Reactjs.org 
- <https://reactjs.org/docs/hello-world.html>

# React 개발 접근 방법 
- 목업 데이터 준비 
- 화면을 나눠서 컴포넌트 만들기 
- 정적(static) 버전만들기
- state 와 pops 구별 


 1. 목업 데이터 준비 
 - 목업 데이터는 API 결과를 JSON 형태로 
 
 2. 화면을 나눠서 컴포넌트 만들기 <---사고의 전환이 필요, 매우 중요한 부분
 - 화면을 컴포넌트로 나누는 작업에 익숙해지는 것이 중요
 - 화면을 보고 기능 및 의미있는 단위로 / 최대한 분리해 본다. 
 - 모든 페이지에 대해서 컴포넌트를 그려보는 연습이 필요. 
 - 화면을 보고 작은 컴포넌트로 분리해서 시각적으로 표시해서 연습을 한다. 
 - 리액트를 사용하지 않더라도 기존 화면들을 마크업 설계시 컴포넌트 단위로 마크업을 한다. 
 
 
 ```
  List
   ListHeader
    ListInnerHeader
   ListBody
   ListItem
   
 ```  
 
 3. 정적(static) 버전 만들기 
 - 화면을 컴포넌트 단위로 나누고 나면 준비된 목업 데이터로 화면을 그리는 정적 버전을 만드는 작업을 진행  
 - 우선은 화면동작을 고려하지 않고, 주어진 목업 데이터를 화면에 그리는 것에 집중하여 작업을 진행.
 - LEGO 블럭을 조립하듯 작은 컴포넌트를 조합해서 상위 컴포넌트를 만들 수 있도록
 (! 한미구축 플젝 / 복잡도가 높아지면 유지보수가 쉽지 않으니 그런 부분을 주의)
 -  화면을 컴포넌트단위로 쪼개는 연습을 그림을 그리듯이 반복적으로 학습한다. 
 
 
 4. stat 와 props 구별 
 
 
 
 
 
 

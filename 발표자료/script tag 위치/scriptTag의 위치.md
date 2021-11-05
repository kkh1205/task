### 브라우저 동작방식

1.  HTML 읽기
2. HTML 파싱
  - 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공하는 것을 말합니다. - 질문대비
3. DOM tree 생성
4. Render Tree (DOM tree +  CSS tree 결합) 생성
5. Display

![img](https://media.vlpt.us/post-images/takeknowledge/aea046b0-2404-11ea-addc-59a0f147306b/image.png)

**브라우저는 HTML을 파싱하던 중 script tag를 만나면 HTML 파싱을 중단하고 script를 로드 후 파싱한다. 그 이후 다시 HTML을 파싱합니다.**



여기서 생기는 문제.

1. script가 생성되지 않은 DOM을 조작하여 문제가 생길 수 있습니다.
2. HTML 중간에 script를 만나면 만나기 이전 화면은 출력되고 이후 화면은 script처리가 끝날 때까지 보이지 않습니다.



### script tag를 하단에 놓기 싫다면?



#### script tag 속성으로 로딩순서 제어하기

##### 1.async

```
<script async src="asyncTest.js"></script>
```

![img](https://media.vlpt.us/post-images/takeknowledge/fd6a6960-2404-11ea-addc-59a0f147306b/image.png)



##### 2.defer

```
<script defer src="deferTest.js"></script>
```

![img](https://media.vlpt.us/post-images/takeknowledge/808d77a0-2406-11ea-a53a-abac3e9de1b1/image.png)



#### script 내부에서 제어하기

##### 1.DOMContentLoaded

DOM 생성이 끝난 후 실행

```
document.addEventListener("DOMContentLoaded", function(){});
```



##### 2.onload

문서에 포함된 모든 컨텐츠 로드 후 실행.

```
window.onload = function(){}
```



#### script tag로 외부 js파일을 불러올 때

불러온 순서에 따라 순차적으로 읽어오기 때문에, 순서가 꼬이면 작동하지 않는 

코드가 있을 수 있다.

예시

```
<script src = "logic.js"></script> // data를 불러옴
<script src = "data.js"></script> // data는 나중에 정의됨.
--> 작동X
```


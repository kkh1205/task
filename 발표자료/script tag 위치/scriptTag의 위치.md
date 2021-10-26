### 브라우저 동작방식

1.  HTML 읽기
2. HTML 파싱
  - 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공하는 것을 말합니다. 
3. DOM tree 생성
4. Render Tree (DOM tree +  CSS tree 결합) 생성
5. Display

![img](https://media.vlpt.us/post-images/takeknowledge/aea046b0-2404-11ea-addc-59a0f147306b/image.png)

**브라우저는 HTML을 파싱하던 중 script tag를 만나면 HTML 파싱을 중단하고 script를 로드 후 파싱한다. 그 이후 다시 HTML을 파싱.**



여기서 script가 생성되지 않은 DOM을 조작하려 할 수 있습니다. 


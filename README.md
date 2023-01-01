# 포트폴리오 사이트 프로젝트
- 제작자 : 안정원
- 깃허브 url : https://github.com/geniunahn/portfolio_site
- 프로젝트 url : https://geniunahn.github.io/portfolio_site/

# 제작 상황 및 목표
- 제작 상황 : HTML, CSS, JS, jQuery를 익힐 후 nodejs, ejs, sqlite, React를 배우는 단계에서 현재까지 완성한 프로젝트를 소개하는 포트폴리오 사이트를 완성해야 하는 상황. 프로젝트 이전부터 필자는 풀 페이지 js를 활용한 슬라이드 연출에 관심이 많았다. 풀 페이지 js가 가지는 간단 명료함과 높은 가독성은 꼭 도전하고 싶었던 디자인이기 때문에 기획 단계에서부터 포트폴리오 사이트의 디자인은 풀 페이지 슬라이드로 초점이 맞춰져 있었다. 무료로 공유되고 있는 풀 페이지 js의 기본적인 소스와 CDN을 확보한 후 곧장 포트폴리오 사이트의 시안 작업을 시작했다.
- 제작 목표 : 화려함보다는 심플함이 돋보이는 디자인을 선택하여 핵심적인 정보를 군더더기 없이 전달하는 것이 목표다. 어설픈 기술을 이용한 화려함은 빈약해 보이고 가벼워 보일 가능성이 크다고 생각했다. 그래서 절제된 단순함을 선택하여 단점이 적으면서 전달력이 강한 디자인을 구현하고자 노력했다

# 디자인 및 적용기술 설명
![1](https://user-images.githubusercontent.com/106502672/210173443-f848a575-a4a2-4ef3-9697-a7c19706a058.jpg)
![2](https://user-images.githubusercontent.com/106502672/210173445-3412cb93-f123-433c-ab4f-973f15a9146e.jpg)
![3](https://user-images.githubusercontent.com/106502672/210173448-96395bad-c696-4016-a9f3-3bb181a88b0a.jpg)
![4](https://user-images.githubusercontent.com/106502672/210173451-056ea11a-dac2-4db9-bfa0-d94a69041cfe.jpg)
![5](https://user-images.githubusercontent.com/106502672/210173454-9f72a18f-f75b-4df8-a6fb-85469c73f24b.jpg)
![6](https://user-images.githubusercontent.com/106502672/210173456-e3ada0c7-d414-42cc-a613-4eecbbe35e0b.jpg)

# 제작 과정에서의 문제와 극복 과정
- 제작 과정에서 필자를 힘들게 한 문제는 풀 페이지 js를 활용할 경우 scroll 값을 이용할 수 없다는 것이었다. 이것을 깨달은 것은 전체적인 다자인을 완성한 후 AOS API를 활용한 애니메이션과 nav에게 a 태그 기능을 적용할 때였다. 아무리 정확히 입력해도 AOS의 애니메이션과 a 태그의 링크 기능이 적용되지 않아서 필자는 적잖이 당황했다. 원인을 찾아본 결과 풀 페이지 js에서 지원하는 CDN이 scroll 값을 이용하지 못하도록 한다는 것을 발견했다. AOS는 기본적으로 요소의 scroll 값을 기준으로 애니메이션이 실행된다. 또한 a 태그의 링크 기능 역시 마찬가지다. 그래서 필자가 사용하는 풀 페이지 js에서는 scroll을 활용한 모든 이벤트가 적용이 불가능했던 것이다. 이 사실을 알게 된 후 필자는 풀 페이지 js를 포기하고 처음부터 다시 사이트를 만들지, 아니면 이 문제를 극복할 방법을 찾을지 고민해야 했고, 필자는 후자를 선택했다.
- scroll 값을 이용한 이벤트가 불가능하다면 도대체 어떻게 애니메이션 이벤트와 nav의 링크 기능을 구현할 수 있을까? 개발자 도구를 열고 이런저런 고민을 하던 필자는 풀 페이지 js가 스크린을 이동할 때마다 addClass, removeClass를 반복하는 모습을 발견하고 해결의 실마리를 찾았다. 'scroll이 이벤트를 시작하는 방아쇠 역할을 하지 못한다면 class를 방아쇠 역할로 삼으면 되지 않을까?'라는 생각이 떠오른 것이다. 생각이 떠오르자마자 곧장 실험과 관찰을 시작했다.
- 개발자 도구로 풀 페이지 js를 관찰한 결과 스크롤이 움직일 때마다 3가지 변화가 생긴다. 첫째, body의 class 이름이 "fp-viewing-(페이지 숫자)"라고 변한다. 둘째, 사용자에게 보이는 페이지 div 박스에게 active 클래스가 붙고 나머지 섹션의 div 박스들의 active 클래스는 제거된다. 셋째, 풀 페이지 div 박스의 스타일 중에서 transform: translate3d(0px, 0px, 0px)의 값이 변한다. 필자는 이 세 가지 변화를 응용하여 css를 적용해 보았고 그 결과 화면이 첫 번째 페이지로 이동하는 것을 확인할 수 있었다. 해결 원리를 찾았으니 남은 것은 적용하는 것뿐이었다.
- 사용자가 페이지를 넘기면 해당 페이지의 이벤트가 실행하는 것부터 시작했다. 방법은 간단했다. 페이지에 addClass 되는 클래스를 찾아서 애니메이션이 동시에 실행되도록 스타일을 적용하면 된다. 적용해 보니 등장 애니메이션이 잘 실행됐다. swiper 역시 풀 페이지 js와 마찬가지로 사용자가 보는 슬라이드에 active 클래스가 addClass 되는 것을 확인할 수 있었다. 그 말은 사용자가 보는 슬라이드에게만 애니메이션이 실행되도록 할 수 있다는 의미였다. 한 번 해결되기 시작하자 나머지 문제까지 술술 풀리기 시작했다.
- 그런데 다시 문제가 발생했다. 풀 페이지 div 박스의 스타일을 transform: translate3d(0px, 0px, 0px)로 수정하면 첫 번째 페이지로 이동하지만 나머지 페이지로 이동하기 위해서는 구체적인 위치 값을 입력해야 한다는 것이었다. 그것을 대체 어떻게 구한단 말인가? 실험한 결과 브라우저 창의 크기에 따라 translate3d의 값이 조금씩 변하는 것을 확인할 수 있었다. 다시 말해 절댓값으로 각 섹션의 값을 지정할 수 없다는 의미였다. 여기서 필자는 선택을 해야 했다. 첫 번째 페이지로 가는 메뉴만 남기고 나머지 메뉴는 삭제할 것인가, 아니면 문제를 해결할 것인가. 필자는 후자를 선택하고 다시 고민에 빠졌다.
- 인터넷 검색을 하고 console 창에서 이런저런 실험을 하던 중 마침내 중요한 단서를 찾을 수 있었다. 각 섹션의 offset 값이 정확하게 구해진다는 것이었다. 실험해 보니 브라우저의 크기가 변해도 각 섹션의 offset 값 역시 그에 맞게 변한다는 것을 확인할 수 있었다. 다시 말해 translate3d의 값을 찾은 것이다! 바로 소스에 적용해 보았고 마침내 제대로 실행되는 nav을 얻는 데 성공했다. 마침내 풀 페이지 js 환경에서 스크롤 값에 기대지 않고 필요한 모든 이벤트를 구현하는 데 성공한 것이다.

# 개발자 노트
# 12월 21일
- 피그마로 시안을 만든 후 화면을 구현함
- 풀 페이지 방식으로 화면을 볼 수 있도록 함 (fullpage.js 를 기반으로 함)
- 스와이프를 이용하여 슬라이드 이벤트를 구현함 (모든 슬라이드 이벤트는 swiper 를 기반으로 함)

# 12월 23일 
- 각 센션의 바탕색에 맞게 컨텐츠 요소들의 색을 선택하고 contact 섹션의 버튼에게 hover 효과를 적용함.
- 클릭할 수 있는 이미지 요소에게는 마우스를 hover 했을 때 이미지가 살짝 커지는 이벤트와 cursor 스타일을 줌.
- 클릭할 수 없는 이미지 요소는 해당 섹션으로 이동할 경우 zoom-in 애니메이션이 실행되는 이벤트를 적용함. (cursor 스타일은 주지 않음)

# 12월 25일
- nav로 원하는 섹션으로 화면 이동할 수 있도록 함
- 각 센션의 바탕색에 맞춰서 nav의 색이 적절히 변경되도록 함
- 오프닝 인사말 페이지 구현
- 헤더와 1번 섹션이 오프닝 페이지가 사라진 후 자연스럽게 애니메이션으로 등장하도록 함. 단 첫 등장할 때 한 번만 실행됨
- 2~5번 섹션의 컨텐츠가 fade 애니메이션으로 등장하도록 함. 사용자가 해당 섹션으로 이동할때마다 애니메이션은 반복 실행됨

# 12월 26일
- skills 그래프가 동적으로 움직이는 이벤트를 완성함
- works 의 슬라이드 이미지를 클릭할 경우 해당 프로젝트의 url이 새 창으로 열리도록 수정함 (blank)

# 1월 1일
- 모든 섹션의 좌우 박스의 width 값을 통일함
- 최근에 배운 skill과 포트폴리오를 업데이트함
- 블로그는 개발자 블로그와 CG일러스트, 웹툰 블로그 2개를 갈 수 있도록 추가함

# 1월 2일
- skill 아이콘에 맞게 그래프 컬러를 수정함


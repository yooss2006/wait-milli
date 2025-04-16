# React Native Expo 웹앱 상세 UI 컴포넌트 설계

## 1. 주요 화면 및 기능

- 게임 준비(참가자 입력, 인원수/옵션 설정, 게임 설명)
- 캐릭터 배정
- 게임 플레이(플레이어 리스트, 스톱워치, 점수판, 버튼 등)
- 결과/랭킹 화면

---

## 2. 세부 UI 컴포넌트 목록

### 2.1. 공통 레이아웃

- **AppContainer**: 전체 앱의 레이아웃 및 SafeAreaView, 글로벌 스타일 적용

### 2.2. 게임 준비 화면

- **PlayerCountSelector**: 인원수 조절(화살표 버튼, 현재 인원수 표시) ✅
- **GameModeSelector**: 승자/패자 결정 방식 선택(토글/버튼 그룹) ✅
- **RematchToggle**: 재경기 가능 여부 토글 스위치 ✅
- **InfoText**: 안내/설명 텍스트 표시 ✅
- **NavigationButtonGroup**: 다음 단계로 이동 버튼 그룹 ✅

### 2.3. 캐릭터 배정 화면

- **CharacterAssignmentList**: 각 참가자별 캐릭터 정보(이름, 캐릭터, 그리드 레이아웃)
- **AssignmentGuide**: 안내 문구
- **PrevButton**: 이전 단계로 이동 버튼
- **NextButton**: 다음 단계로 이동 버튼

### 2.4. 게임 플레이 화면

- **PlayerList**: 플레이어 순서, 캐릭터, 점수, 현재 턴 강조, 탈락/완료 상태 표시
- **Stopwatch**: 스톱워치(시작/정지)
- **ScoreBoard**: 점수판(첫 번째/두 번째 숫자, 곱셈식, 최종 점수)
- **ActionButtonGroup**:
  - StartButton: 스톱워치 시작
  - StopButton: 스톱워치 정지
  - NextPlayerButton: 다음 플레이어로 이동
  - ShowResultButton: 결과 보기
  - RematchButton: 재경기 시작
- **GameStatusGuide**: 현재 상태/안내 문구(예: "다음 플레이어 차례입니다")
- **Timer**: 남은 시간 표시(필요시)

### 2.5. 결과/랭킹 화면

- **ResultList**: 참가자별 점수/랭킹/캐릭터 표시
- **WinnerHighlight**: 승자/패자 강조(시각적 효과, 여러 명 지원)
- **ResultGuide**: 안내 문구
- **RestartButton**: 게임 재시작 버튼
- **HomeButton**: 처음으로 버튼(선택)

### 2.6. 공통/보조 컴포넌트

- **ArrowButton**: 좌우 화살표 버튼
- **ToggleSwitch**: 토글 스위치
- **Button**: 공통 버튼 스타일
- **Modal**: 안내/경고/확인용 모달
- **Icon**: 아이콘(react-native-vector-icons)
- **LottieAnimation**: 승자 발표 등 애니메이션 효과

---

## 3. 컴포넌트 구조(트리)

- AppContainer
  - GamePreparationScreen
    - PlayerCountSelector
      - ArrowButton
    - GameModeSelector
    - RematchToggle
    - InfoText
    - NavigationButtonGroup
    - PlayerInputList
    - GameDescription
    - NextButton
  - CharacterAssignmentScreen
    - AssignmentGuide
    - CharacterAssignmentList
    - PrevButton
    - NextButton
  - GameplayScreen
    - PlayerList
    - Stopwatch
    - ScoreBoard
    - ActionButtonGroup
      - StartButton
      - StopButton
      - NextPlayerButton
      - ShowResultButton
      - RematchButton
    - GameStatusGuide
    - Timer
  - ResultScreen
    - ResultGuide
    - ResultList
    - WinnerHighlight
    - RestartButton
    - HomeButton

---

## 4. 추가 고려사항

- 각 컴포넌트는 역할별로 최대한 분리, 재사용성 고려
- 상태 관리(참가자, 캐릭터, 점수, 게임 옵션 등)는 상위에서 관리, 하위 컴포넌트는 props로 전달
- 스타일, 애니메이션, 접근성 등도 별도 설계
- 모든 UI/UX 요구사항(강조, 안내, 비활성화, 애니메이션 등) 반영
- HTML 디자인 파일의 레이아웃/구성/상호작용을 1:1로 구현

---

## 5. 다음 단계

- 각 컴포넌트의 props, 역할, 예시 인터페이스 설계
- 실제 컴포넌트 파일 생성 및 구현 진행

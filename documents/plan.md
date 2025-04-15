# 콩콩팥팥 게임 개발 계획

## 1. 프로젝트 구조

### 폴더 구조

```
src/
├── components/            # 재사용 컴포넌트
│   ├── common/            # 공통 컴포넌트
│   ├── gamePreparation/   # 게임 준비 화면 컴포넌트
│   ├── characterAssignment/ # 캐릭터 분배 화면 컴포넌트
│   ├── gameplay/          # 게임 진행 화면 컴포넌트
│   └── result/            # 결과 화면 컴포넌트
├── screens/               # 앱 화면
│   ├── GamePreparationScreen.jsx
│   ├── CharacterAssignmentScreen.jsx
│   ├── GameplayScreen.jsx
│   └── ResultScreen.jsx
├── contexts/              # 상태 관리
│   ├── GameSettingsContext.jsx
│   └── PlayersContext.jsx
├── hooks/                 # 커스텀 훅
│   ├── useStopwatch.js
│   └── useGameLogic.js
├── utils/                 # 유틸리티 함수
│   ├── scoreCalculation.js
│   └── characterGenerator.js
├── constants/             # 상수 정의
│   ├── gameConstants.js
│   └── theme.js
└── App.jsx                # 앱 진입점
```

## 2. UI 컴포넌트 구현

### 공통 컴포넌트

- [ ] **AppContainer**: 모든 화면의 기본 컨테이너
- [ ] **ScreenHeader**: 화면 제목과 부가 정보 표시
- [ ] **PrimaryButton**: 주요 동작 버튼
- [ ] **SecondaryButton**: 보조 동작 버튼
- [ ] **ToggleSwitch**: 설정 On/Off 토글
- [ ] **RadioButtonGroup**: 옵션 선택 버튼 그룹
- [ ] **InfoBox**: 정보 표시 박스

### 게임 준비 화면 컴포넌트

- [ ] **PlayerCountSelector**: 참여 인원 선택기
- [ ] **GameModeSelector**: 게임 모드 선택기
- [ ] **GameOptionsSection**: 게임 옵션 설정 섹션

### 캐릭터 분배 화면 컴포넌트

- [ ] **CharacterGrid**: 캐릭터 그리드 레이아웃
- [ ] **CharacterCard**: 개별 캐릭터 카드

### 게임 진행 화면 컴포넌트

- [ ] **PlayerList**: 왼쪽 섹션의 플레이어 목록
- [ ] **PlayerItem**: 개별 플레이어 항목 (캐릭터, 이름, 점수 포함)
- [ ] **StopwatchDisplay**: 스톱워치 시간 표시
- [ ] **ScoreBoard**: 점수판 (첫번째 숫자, 두번째 숫자, 결과)
- [ ] **GameControlButton**: 게임 진행 제어 버튼

### 결과 화면 컴포넌트

- [ ] **ResultAnnouncement**: 결과 발표 컴포넌트
- [ ] **ResultCharacters**: 결과 캐릭터 표시
- [ ] **ScoreList**: 점수 순위표
- [ ] **ConfettiEffect**: 축하 효과 컴포넌트

## 3. 상태 관리 구현

### GameSettingsContext

- [ ] 플레이어 수
- [ ] 게임 모드 (승자/패자 결정)
- [ ] 재경기 옵션
- [ ] 게임 단계 상태

### PlayersContext

- [ ] 플레이어 목록
- [ ] 현재 플레이어 인덱스
- [ ] 플레이어 점수
- [ ] 동점자 정보

### 화면별 로컬 상태

- [ ] **게임 준비 화면**: 선택 중인 값들
- [ ] **게임 진행 화면**: 스톱워치 상태, 현재 기록된 숫자들
- [ ] **결과 화면**: 애니메이션 상태

## 4. 화면별 기능 구현

### 게임 준비 화면

- [ ] 참여 인원 설정 (2-6명)
- [ ] 게임 모드 선택 (승자/패자 결정)
- [ ] 동점자 재경기 옵션 설정

### 캐릭터 분배 화면

- [ ] 랜덤 동물 캐릭터 생성 및 표시
- [ ] 캐릭터 선택 기능

### 게임 진행 화면

- [ ] 스톱워치 기능 (시작, 정지)
- [ ] 밀리초 추출 및 점수 계산 (뒷자리 숫자 곱셈)
- [ ] 플레이어 순서 관리
- [ ] 동점자 재경기 처리

### 결과 화면

- [ ] 최종 결과 표시 (승자/패자)
- [ ] 전체 점수 순위표 표시
- [ ] 축하 효과 (승자 결정 모드)
- [ ] 재시작 기능

## 5. 커스텀 훅 개발

### useStopwatch

- [ ] 스톱워치 시작/정지 기능
- [ ] 밀리초 단위 시간 측정
- [ ] 포맷팅된 시간 반환

### useGameLogic

- [ ] 게임 진행 로직 관리
- [ ] 점수 계산 및 저장
- [ ] 플레이어 순서 처리
- [ ] 동점자 처리 로직

## 6. 개발 단계

### 1단계: 기본 구조 및 내비게이션 설정

- [ ] 프로젝트 초기화 및 폴더 구조 설정
- [ ] React Navigation 설정
- [ ] 기본 화면 구성

### 2단계: 공통 컴포넌트 개발

- [ ] UI 기본 컴포넌트 구현
- [ ] 테마 및 스타일 설정

### 3단계: 게임 준비 화면 구현

- [ ] 인원수 선택 기능
- [ ] 게임 모드 선택 기능
- [ ] 재경기 옵션 설정

### 4단계: 캐릭터 분배 화면 구현

- [ ] 랜덤 캐릭터 생성 기능
- [ ] 캐릭터 그리드 표시

### 5단계: 게임 진행 화면 구현

- [ ] 스톱워치 기능
- [ ] 점수 계산 로직
- [ ] 플레이어 순서 관리
- [ ] 동점자 재경기 처리

### 6단계: 결과 화면 구현

- [ ] 최종 결과 표시
- [ ] 점수 순위표 구현
- [ ] 축하 애니메이션 효과

### 7단계: 테스트 및 최적화

- [ ] 기능 테스트
- [ ] UI/UX 개선
- [ ] 성능 최적화

## 7. 추가 고려사항

- [ ] **접근성**: 적절한 색상 대비, 텍스트 크기 조정 지원
- [ ] **다국어 지원**: 향후 다국어 지원을 고려한 구조 설계
- [ ] **성능 최적화**: 메모이제이션, 불필요한 리렌더링 방지
- [ ] **애니메이션 최적화**: 디바이스 성능에 따른 애니메이션 조정

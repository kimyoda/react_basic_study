// Mount -> Update -> UnMonunt

// Mount (Like. 탄생)
// - 컴포넌트가 탄생하는 순간
// - 화면에 처음 렌더링 되는 순간

// Update (Like. 변화)
// - 컴포넌트가 다시 렌더링 되는 순간
// - 리렌더링 될 때를 의미
// -> "A컴포넌트가 업데이트 되었다!" => A 컴포넌트가 리렌더링 되었다

// UnMount (Like. 죽음)
// - 컴포넌트가 화면에서 사라지는 순간
// - 렌더링에서 제외 되는 순간을 의미
// -> "A컴포넌트가 언마운트 되었다!" => A 컴포넌트가 화면에서 사라졌다

// Mount(서버에서 데이터를 불러오는 작업)
// Update(어떤 값이 변경되었는지 콘솔에 출력)
// UnMount(컴포넌트가 사용하던 메모리를 정리)

// 위 작업을 라이프사이클 제어
// useEffect로 손쉽게 구현이 가능

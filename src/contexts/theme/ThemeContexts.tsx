import { createContext } from "react";

// Context (맥락)
// 리액트 컴포넌트 트리 전체에 데이터를 공급할 수 있는 내장 상태관리 시스템
// 사용방법 : 생성 -> 데이터 주입 -> 사용

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode,
    toggleTheme: VoidFunction, // () => void,
}

// 1. Context 생성 : createContext(초기값)   => 근데 context의 (진짜)대부분의 초기값은 null
export const ThemeContext = createContext<ThemeContextType | null>(null);
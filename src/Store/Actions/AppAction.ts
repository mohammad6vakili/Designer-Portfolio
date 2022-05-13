export const THEME = "THEME";


export const setTheme = (data:any) => {
  return {
    type: THEME,
    payload: data,
  };
};

export const sortBy = (field: any) => {
  return function (a: any, b: any) {
    return (
      (((a[field] as any) > b[field]) as any) -
      (((a[field] as any) < b[field]) as any)
    );
  };
};

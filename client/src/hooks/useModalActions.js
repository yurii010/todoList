const useModalActions = () => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return { handleModalClick };
};

export default useModalActions;

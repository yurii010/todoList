import useChangeModalAction from "../hooks/useChangeModalActions";
import useModalActions from "../hooks/useModalActions";

const ChangeModal = () => {
  const { visibility, textValue, titleValue, setTextValue, setTitleValue, onClickHandler, closeModal } = useChangeModalAction();
  const { handleModalClick } = useModalActions();

  return (
    <div onClick={closeModal} className={`fixed inset-0 z-10 flex justify-center items-center ${visibility ? `` : `hidden`}`}>
      <div onClick={handleModalClick} className="flex flex-col p-5 blur-layout w-6/12">
        <p className="py-1 px-5">Change your title</p>
        <input
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          type="text"
          placeholder="Change title"
          className="w-[calc(100%-2.5rem)] h-10 mx-5 p-3 rounded-3xl bg-transparent border border-[rgba(118,160,218)] none-orange-input"
          required
        />{" "}
        <p className="py-1 px-5">Change your text</p>
        <textarea
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          placeholder="Change text"
          className="w-[calc(100%-2.5rem)] resize-none h-64 mx-5 p-3 rounded-3xl bg-transparent border border-[rgba(118,160,218)] none-orange-input"
          required
        />{" "}
        <div className="flex justify-around w-full m-auto mt-5 px-5">
          <button className="rounded-3xl p-2 w-2/6 bg-[rgba(118,160,218)]" onClick={onClickHandler}>
            Change
          </button>
          <button className="rounded-3xl p-2 w-2/6 bg-[rgba(118,160,218)]" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeModal;

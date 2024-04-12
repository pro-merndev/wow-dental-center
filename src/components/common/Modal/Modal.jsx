const Modal = ({ isOpen, onClose }) => {
  return (
    <div>
      <div className="flex gap-8">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis, purus at fermentum sollicitudin, odio mi tincidunt justo,
            nec varius purus metus in turpis. Nunc at erat euismod, feugiat
            tortor.{" "}
        </p>
      </div>
      <div>
        <button
          className="text-5xl cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
};

export default Modal;

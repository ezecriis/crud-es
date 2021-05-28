import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalContact, openModalContact, closeModelContact] = useModal(false);
  const [isOpenModalSearch, openModalSearch, closeModelSearch] = useModal(false);

  return (
    <div>
      <h2>Modals</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Natura" />
      </Modal>
      <button onClick={openModalContact}>Modal contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModelContact}>
        <h3>Modal 2</h3>
        <p>Este es el contenido del modal de contacto</p>
        <ContactForm />
      </Modal>
      <button onClick={openModalSearch}>Modal song search</button>
      <Modal isOpen={isOpenModalSearch} closeModal={closeModelSearch}>
        <h3>Modal 3</h3>
        <p>Este es el contenido del modal de buscador de canciones</p>
        <SongSearch />
      </Modal>
    </div>
  );
};

export default Modals;

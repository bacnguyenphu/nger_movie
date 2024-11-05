function ModalWatchMovie({ linkMovie }) {
    return (
        <iframe
            className="h-[720px] shadow-lg absolute w-[1268px] top-[80px] left-[50%] translate-x-[-50%] z-[80]"
            src={linkMovie}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
        >
        </iframe>
    );
}

export default ModalWatchMovie;
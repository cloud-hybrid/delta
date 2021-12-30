import Styles from "./styles/template/index.module.scss";

const Template = () => {
    return (
        <main className={Styles.page}>
            <div className={Styles.container}>
                <h1 className={Styles.title}>
                    TS Template
                </h1>
                <h2 className={Styles.synopsis}>
                    Cloud-Technology.IO
                </h2>
            </div>
        </main>
    );
};

export {Template};

export default Template;
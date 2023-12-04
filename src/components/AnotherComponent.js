import styles from "./AnotherComponent.module.css"

function AnotherComponent() {
    return (
        <>
            <h1 className={styles.heading}>Component Heading</h1>
            <p className={styles.bodyText}>Random paragraph to fill the Component</p>
        </>
    )
}

export default AnotherComponent;
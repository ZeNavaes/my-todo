import styles from "./styles.module.scss"

interface StatsCardProps {
    title: string
    value: number
}

export const StatsCard: React.FC<StatsCardProps> = (props) => {
    return (
        <article className={styles.stats_card}>
            <h2>{props.title}</h2>
            <span>{props.value}</span>
        </article>
    )
}
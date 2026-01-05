import { ProductVersion } from '@/lib/mockData';
import styles from './VersionHistory.module.css';

interface VersionHistoryProps {
    versions: ProductVersion[];
}

export default function VersionHistory({ versions }: VersionHistoryProps) {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Disclosure History</h3>
            <div className={styles.list}>
                {versions.map((version, index) => (
                    <div key={version.id} className={styles.item}>
                        <div className={styles.timeline}>
                            <div className={styles.dot}></div>
                            {index !== versions.length - 1 && <div className={styles.line}></div>}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.version}>v{version.versionNumber}</span>
                                <span className={styles.date}>
                                    {new Date(version.timestamp).toLocaleDateString('en-US', {
                                        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                    })}
                                </span>
                            </div>
                            <p className={styles.summary}>{version.changeSummary}</p>
                            <div className={styles.editor}>
                                Declared by: <span className={styles.name}>{version.editorName}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import styles from './styles.module.scss'

const About = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h3 className={styles.descTitle}>Bitmon Whitepaper</h3>
          <p className={styles.descText}>
            Bitmon Space is a digital metaverse where people can find digital
            friends that will accompany you day to day playing different kinds
            of minigames, collecting, battling.{' '}
          </p>
          <p className={styles.descText}>
            While still in early access, Bitmon creates a bridge between digital
            characters to the real world to create a special bond with your
            digital creature and improve its stats with very interesting play to
            earn opportunities.
          </p>
          <p className={styles.descText}>
            You can raise your stats, build spaceships and guilds and view your
            character data easily by 3rd parties, allowing community developers
            to build their tools and experiences in the Bitmon Space universe.
          </p>
          <p className={styles.descText}>
            Bitmon wants to create a positive impact on society by making its
            Governance open to the community using BTMN tokens implementing
            NextGen Blockchain technologies, allowing it to create new
            alternatives to Play to Earn dynamics.
          </p>
        </div>

        <div className={styles.description}>
          <h3 className={styles.descTitle}>Players can get rewarded by:</h3>
          <ul className={styles.descText}>
            <li className={styles.descText}>
              Playing mini games battles to win leaderboard prizes.
            </li>
            <li className={styles.descText}>
              Breeding Bitmons and selling them on the marketplace.
            </li>
            <li className={styles.descText}>Staking Tokens.</li>
            <li className={styles.descText}>
              Collecting and speculating on rare Bitmons.
            </li>
            <li className={styles.descText}>
              Creating landing zones and crafting spaceships modules and selling
              them on the Marketplace.
            </li>
            <li className={styles.descText}>
              Players can earn a governance token, BTMN, which represents a real
              slice of the game universe as it has governance rights and
              fee-sharing built into it.{' '}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About

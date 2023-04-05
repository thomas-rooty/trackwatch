import styles from './userprofile.module.css'
import { ButtonMain, ButtonSecondary } from '@/components/buttons/Buttons'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/user'

const UserProfile = () => {
  const user = useUserStore((state) => state.user)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (user) {
      setLoaded(true)
    }
  }, [user])

  return (
    <>
      {loaded && (
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome {user?.name}</h1>
          <div className={styles.ppSection}>
            <div className={styles.avatarUpper}>
              <p className={styles.description}>Avatar</p>
              <div>
                <Image
                  className={styles.avatar}
                  src={user?.avatar_url as string}
                  alt="Avatar"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={styles.avatarLower}>
              <div className={styles.ppUpload}>
                <ButtonSecondary>Upload</ButtonSecondary>
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Name</p>
              <div className={styles.infoInput}>
                <input type="text" value={user?.name} />
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Email</p>
              <div className={styles.infoInput}>
                <input type="email" value={user?.email} />
              </div>
            </div>
          </div>
          <div className={styles.infoSection}>
            <div className={styles.infoUpper}>
              <p className={styles.description}>Password</p>
              <div className={styles.infoInput}>
                <input type="password" value={''} />
              </div>
            </div>
          </div>
          <div className={styles.saveSection}>
            <ButtonMain>Save changes</ButtonMain>
          </div>
        </div>
      )}
    </>
  )
}

export default UserProfile

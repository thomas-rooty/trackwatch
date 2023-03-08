import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/stores/auth';
import styles from './sidebar.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import BrandInline from '@/public/img/brand_inline.png';
import Calendar from '@/public/icons/calendar.png';
import CalendarActive from '@/public/icons/calendar_active.png';
import Upcoming from '@/public/icons/upcoming.png';
import UpcomingActive from '@/public/icons/upcoming_active.png';
import List from '@/public/icons/list.png';
import ListActive from '@/public/icons/list_active.png';
import Profile from '@/public/icons/profile.png';
import ProfileActive from '@/public/icons/profile_active.png';
import Search from '@/public/icons/search.png';
import SearchActive from '@/public/icons/search_active.png';
import Settings from '@/public/icons/settings.png';
import SettingsActive from '@/public/icons/settings_active.png';
import Help from '@/public/icons/help.png';
import HelpActive from '@/public/icons/help_active.png';
import Feedback from '@/public/icons/feedback.png';
import FeedbackActive from '@/public/icons/feedback_active.png';
import SignOut from '@/public/icons/signout.png';

const Sidebar = () => {
  // Used to determine which sidebar item is active and render the correct icon & class
  const pathname = usePathname();
  const isActive = (route: string) => {
    return pathname === route;
  };
  const getIcon = (icon: any, iconActive: any, active: boolean) => {
    return active ? iconActive : icon;
  };

  // Sign out callback
  const _signOut = useAuthStore((state) => state.signOut)

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogoContainer}>
        <Link href='/'>
          <Image src={BrandInline} className={styles.sidebarLogo} alt='logo' />
        </Link>
      </div>
      <hr className={styles.hr} />
      <div className={styles.sidebarItemContainer}>
        <div className={styles.sidebarItemSection}>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${isActive('/account') ? styles.active : ''}`}>
              <Image src={getIcon(Profile, ProfileActive, isActive('/account'))} className={styles.svgIcon} width={24}
                     height={24} alt='list icon' />
              <Link href='/account'>
                <span className={styles.link}>Profile</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/calendar') ? styles.active : ''}`}>
              <Image src={getIcon(Calendar, CalendarActive, isActive('/calendar'))} className={styles.svgIcon}
                     width={24}
                     height={24} alt='list icon' />
              <Link href='/calendar'>
                <span className={styles.link}>Calendar</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/upcoming') ? styles.active : ''}`}>
              <Image src={getIcon(Upcoming, UpcomingActive, isActive('/upcoming'))} className={styles.svgIcon}
                     width={24}
                     height={24} alt='list icon' />
              <Link href='/upcoming'>
                <span className={styles.link}>Upcoming</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/watchlist') ? styles.active : ''}`}>
              <Image src={getIcon(List, ListActive, isActive('/watchlist'))} className={styles.svgIcon} width={24}
                     height={24} alt='list icon' />
              <Link href='/watchlist'>
                <span className={styles.link}>Watchlist</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/search') ? styles.active : ''}`}>
              <Image src={getIcon(Search, SearchActive, isActive('/search'))} className={styles.svgIcon} width={24}
                     height={24} alt='list icon' />
              <Link href='/search'>
                <span className={styles.link}>Discover</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarItemSection}>
          <p className={styles.sidebarItemSectionTitle}>Support</p>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${isActive('/settings') ? styles.active : ''}`}>
              <Image src={getIcon(Settings, SettingsActive, isActive('/settings'))} className={styles.svgIcon} width={24}
                     height={24} alt='list icon' />
              <Link href='/settings'>
                <span className={styles.link}>Settings</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/help') ? styles.active : ''}`}>
              <Image src={getIcon(Help, HelpActive, isActive('/help'))} className={styles.svgIcon}
                     width={24}
                     height={24} alt='list icon' />
              <Link href='/help'>
                <span className={styles.link}>Get help</span>
              </Link>
            </li>
            <li className={`${styles.sidebarListItem} ${isActive('/feedback') ? styles.active : ''}`}>
              <Image src={getIcon(Feedback, FeedbackActive, isActive('/feedback'))} className={styles.svgIcon}
                     width={24}
                     height={24} alt='list icon' />
              <Link href='/feedback'>
                <span className={styles.link}>Send love!</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.sidebarItemSignout}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem} onClick={_signOut}>
              <Image src={SignOut} className={styles.svgIcon} width={18} height={18} alt='list icon' />
              <span className={styles.link}>Sign out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

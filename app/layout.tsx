import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Mỗi ngày cùng con | Kỹ năng nhỏ, gắn kết lớn',description:'365 bài học kỹ năng mềm và kỹ năng sống cho trẻ tiểu học dưới 12 tuổi. Cha mẹ hướng dẫn, con thực hành, học bất cứ lúc nào.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="vi"><body>{children}</body></html>}

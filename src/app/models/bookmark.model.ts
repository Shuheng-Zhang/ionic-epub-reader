export class Bookmark {
    id: string; // ID
    bookId: string; // 书目ID
    ownerId: string; // 用户ID
    markChapterName: string; // 标记目标章节标题
    markPosition: string; // 标记位置(ePub CFI)
    markPersentage: number; // 标记位置所在百分比
    markDate: Date; // 标记日期
}

/**
 * 书签基本信息
 */
export interface BookmarkBaseInfoDto {
    id: string;
    bookId: string;
    markChapterName: string;
    markPersentage: number;
    markDate: Date;
}

/**
 * 书签跳转信息
 */
export interface Bookmark2ReadInfoDto {
    bookId: string;
    markPosition: string;
}

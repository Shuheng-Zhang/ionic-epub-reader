// export class Bookmark {
//     id: string; // ID
//     bookId: string; // 书目ID
//     ownerId: string; // 用户ID
//     markChapterName: string; // 标记目标章节标题
//     markPosition: string; // 标记位置(ePub CFI)
//     markPersentage: number; // 标记位置所在百分比
//     markDate: Date; // 标记日期
// }


export class Bookmark {
    constructor(
        id: string,
        bookId: string,
        ownerId: string,
        markChapterName: string,
        markPosition: string,
        markPersentage: number,
        markDate: Date
    ) {}
}


/**
 * 书签基本信息
 */
export interface BookmarkBase {
    id: string;
    bookId: string;
}


export interface BookmarkBaseInfoDto extends BookmarkBase {
    markedChapterName: string;
    markedPersentage: number;
    markedDate: Date;
    markedPosition: string;
}

/**
 * 书签详细信息
 */
export interface BookmarkDetailInfoDto extends BookmarkBaseInfoDto {
    markedBookTitle: string;
}



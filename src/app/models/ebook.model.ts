// export class Ebook {
//     id: string; // ID
//     title: string; // 标题
//     author: string; // 作者
//     description: string; // 描述/简介
//     importDate: Date; // 导入日期
//     isSync: boolean; // 是否为同步内容
//     coverUrl?: string; // 封面资源URL
//     contentIndexUrl?: string; // 书目内容索引文件(content.opf)URL
// }


export class Ebook {
    constructor(
        id: string,
        title: string,
        author: string,
        description: string,
        importDate: Date,
        coverUrl?: string,
        contentIndexUrl?: string
    ) {}
}

/**
 * 电子书基础信息
 */
export interface EbookBaseDto {
    id: string;
    importDate: Date;
}

/**
 * 电子书基本描述信息
 */
export interface EbookBaseInfoDto extends EbookBaseDto {
    title: string;
    author: string;
    description: string;
    coverUrl?: string;
}

/**
 * 电子书加载时信息
 */
export interface EbookReaderLoadDto extends EbookBaseDto {
    contentIndexUrl: string;
}

export class Ebook {
    id: string; // ID
    title: string; // 标题
    author: string; // 作者
    description: string; // 描述/简介
    isSync: boolean; // 是否为同步内容
    coverUrl?: string; // 封面资源URL
    contentIndexUrl?: string; // 书目内容索引文件(content.opf)URL
}

/**
 * 电子书基本信息
 */
export interface EbookBaseInfoDto {
    id: string;
    title: string;
    author: string;
    isSync: boolean;
    coverUrl?: string;
}

/**
 * 电子书详细信息
 */
export interface EbookDetailInfoDto extends EbookBaseInfoDto {
    description: string;
}

/**
 * 电子书加载时信息
 */
export interface EbookReaderLoadDto extends EbookBaseInfoDto {
    contentIndexUrl: string;
}

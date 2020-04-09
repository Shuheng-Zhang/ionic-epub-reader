import { BookmarkDetailInfoDto } from './../models/bookmark.model';

export const bookmarksListDto: BookmarkDetailInfoDto[] = [
    {
        id: 'test-bookmark-01',
        bookId: '1000',
        markedBookTitle: 'Test Book 1',
        markedChapterName: 'Chapter 01',
        markedPersentage: 30,
        markedDate: new Date(),
        markedPosition: ''
    },
    {
        id: 'test-bookmark-02',
        bookId: '1000',
        markedBookTitle: 'Test Book 1',
        markedChapterName: 'Chapter 02',
        markedPersentage: 40,
        markedDate: new Date(),
        markedPosition: ''
    },
    {
        id: 'test-bookmark-03',
        bookId: '1000',
        markedBookTitle: 'Test Book 1',
        markedChapterName: 'Chapter 04',
        markedPersentage: 40,
        markedDate: new Date(),
        markedPosition: ''
    },
    {
        id: 'test-bookmark-04',
        bookId: '1001',
        markedBookTitle: 'Test Book 2',
        markedChapterName: 'Chapter End',
        markedPersentage: 90,
        markedDate: new Date(),
        markedPosition: ''
    },
];

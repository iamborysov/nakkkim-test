import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const UniversityScheduleSystem = () => {
    // State for active tab and selected group
    const [activeTab, setActiveTab] = useState('classes');
    const [selectedGroup, setSelectedGroup] = useState('БМВ-21-23');
    const [selectedWeek, setSelectedWeek] = useState('first');

    // Mock data for student groups
    const groups = ['БМВ-21-23', 'БМІ-27-23', 'БММ—23-23', 'БМП-25-23'];

    // Days of the week
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];

    // Time slots
    const timeSlots = ['08:30', '10:00', '11:30', '13:10', '14:40', '16:10', '17:40', '19:10'];

    // Mock schedule data
    const scheduleData = {
        'БМВ-21-23': {
            'Понеділок': {
                '16:10': {
                    subject: 'Зарубіжне музичне мистецтво',
                    type: 'лекція/семінар',
                    teacher: 'Доц. Кравченко А.І.',
                    location: '115/7',
                    link: 'https://classroom.google.com/c/NzIzNjcwNjU3Mzkw?hl=ru&cjc=usodhlz'
                },
                '17:40': {
                    subject: 'Зарубіжне музичне мистецтво',
                    type: 'лекція/семінар',
                    teacher: 'Доц. Кравченко А.І.',
                    location: '115/7',
                    link: 'https://classroom.google.com/c/NzIzNjcwNjU3Mzkw?hl=ru&cjc=usodhlz'
                },
                '19:10': {
                    subject: 'Історія української музики',
                    type: 'лекція/практичне',
                    teacher: 'Доц. Сапожнік О.В.',
                    location: '115/7',
                    link: 'https://classroom.google.com/c/NzIzNjcwNjU3Mzkw?hl=ru&cjc=usodhlz'
                }
            },
            'Вівторок': {
                '14:40': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю.',
                    location: '105/14',
                    link: 'https://classroom.google.com/c/NzEwMDYzMTg5ODE5'
                },
                '16:10': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю.',
                    location: '105/14',
                    link: 'https://classroom.google.com/c/NzEwMDYzMTg5ODE5'
                }
            },
            'Середа': {
                '16:10': {
                    subject: 'Вокальний ансамбль',
                    type: 'практичне',
                    teacher: 'Доц. Ваврищук С.П.',
                    location: '201/14',
                    link: 'https://classroom.google.com/c/NjU4NDM3NzY1MDI5?cjc=lzohcto'
                }
            },
            'Четвер': {
                '16:10': {
                    subject: 'Майстерність актора',
                    type: 'практичне',
                    teacher: 'Ст.викл. Магрицька О.О.',
                    location: '201/14',
                    link: 'https://us04web.zoom.us/j/75581873854?pwd=OLtnTcyAMfaJbv7iFbRgDV5Okvuf6F.1'
                }
            }
        },
        'БМІ-27-23': {
            'Понеділок': {
                '10:00': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '11:30': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                }
            },
            'Вівторок': {
                '13:10': {
                    subject: 'Звукорежисура в MIDI',
                    type: 'лекція/практичне',
                    teacher: 'Проф. Козлін В.Й.',
                    location: '003/15',
                    link: 'https://classroom.google.com/c/NzA3NDg3MTM0MDQ0'
                },
                '14:40': {
                    subject: 'Музично-інформаційні технології',
                    type: 'лекція/практичне',
                    teacher: 'Проф. Козлін В.Й.',
                    location: '003/15',
                    link: 'https://classroom.google.com/c/NzA5NTE2NTU4MjU1'
                }
            }
        },
        'БМП-25-23': {
            'Понеділок': {
                '10:00': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '11:30': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '13:10': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Цимбалов М.А.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '14:40': {
                    subject: 'Виробництво музики',
                    type: 'практичне',
                    teacher: 'Ст.викл. Цимбалов М.А.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
            },
            'Вівторок': {
                '14:40': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю..',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '16:10': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю..',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
            },
            'Середа': {
                '10:00': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Ст..викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '11:30': {
                    subject: 'Музично-теоретичні студії: Сольфеджіо',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю..',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '13:10': {
                    subject: 'Аудіовізуальний продакшн',
                    type: 'лекція',
                    teacher: 'Ст..викл. Павлов М.Е.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
            },
            'Четвер': {
                '13:10': {
                    subject: 'Робота з музичним ансамблем',
                    type: 'практичне',
                    teacher: 'Доц. Сєрова О.Ю.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '14:40': {
                    subject: 'Іноземна мова',
                    type: 'практичне',
                    teacher: 'доц.. Білоус Н.П..',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                }
            },
            'П\'ятниця': {
                '13:10': {
                    subject: 'Робота в студії звукозапису: Основи звукозапису ',
                    type: 'практичне',
                    teacher: 'Ст.викл. Цимбалов М.А.',
                    location: '303/11-1',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '14:40': {
                    subject: 'Робота в студії звукозапису: Основи звукозапису ',
                    type: 'практичне',
                    teacher: 'Ст.викл. Цимбалов М.А.',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                },
                '16:10': {
                    subject: 'Аудіовізуальний продакшн',
                    type: 'практичне',
                    teacher: 'Ст.викл. Цимбалов М.А.',
                    link: 'https://classroom.google.com/c/NzA5Njk5MDczNjY1?hl=ru&cjc=tgrp4ud'
                }
            },
        },
    };

    // Function to get class for the event card based on class type
    const getEventCardStyle = (type) => {
        if (type.includes('лекція')) {
            return {
                bg: 'bg-indigo-50',
                border: 'border-indigo-200',
                header: 'bg-indigo-100',
                icon: 'text-indigo-600'
            };
        }
        if (type.includes('практичне')) {
            return {
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
                header: 'bg-emerald-100',
                icon: 'text-emerald-600'
            };
        }
        if (type.includes('семінар')) {
            return {
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                header: 'bg-amber-100',
                icon: 'text-amber-600'
            };
        }
        return {
            bg: 'bg-slate-50',
            border: 'border-slate-200',
            header: 'bg-slate-100',
            icon: 'text-slate-600'
        };
    };

    // Icon components
    const BookIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    );

    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    );

    const LocationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    );

    const LinkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
    );

    // Event card component
    const EventCard = ({ event }) => {
        if (!event) return null;

        const style = getEventCardStyle(event.type);

        return (
            <div className={`rounded-lg shadow-sm overflow-hidden ${style.bg} border ${style.border}`}>
                <div className={`p-2 ${style.header} flex justify-between items-start`}>
                    <h4 className="font-medium text-sm">{event.subject}</h4>
                </div>
                <div className="p-2">
                    <div className="text-xs mb-1 bg-white/50 rounded px-2 py-1">{event.type}</div>
                    <div className={`flex items-center text-xs mb-1 ${style.icon}`}>
                        <UserIcon /> <span className="ml-1">{event.teacher}</span>
                    </div>
                    <div className={`flex items-center text-xs mb-1 ${style.icon}`}>
                        <LocationIcon /> <span className="ml-1">Ауд. {event.location}</span>
                    </div>
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className={`flex items-center text-xs hover:underline ${style.icon}`}>
                        <LinkIcon /> <span className="ml-1">Google Classroom</span>
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-4 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-md p-4 mb-6 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className=" p-5 rounded-full mr-3">
                            <img src="https://nakkkim.edu.ua/templates/noir/images/logo.png" alt="University Logo" className="w-20 h-20" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Розклад занять НАКККіМ</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex mb-6 bg-white rounded-lg shadow-sm p-1">
                <button
                    className={`flex-1 py-3 px-4 rounded-md transition ${activeTab === 'classes' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveTab('classes')}
                >
                    Розклад занять
                </button>
                <button
                    className={`flex-1 py-3 px-4 rounded-md transition ${activeTab === 'exams' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveTab('exams')}
                >
                    Розклад сесії
                </button>
                <button
                    className={`flex-1 py-3 px-4 rounded-md transition ${activeTab === 'teachers' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveTab('teachers')}
                >
                    Розклад для викладачів
                </button>
            </div>

            {/* Control panel */}
            <div className="flex flex-wrap gap-4 mb-6">
                {/* Group selector */}
                <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
                    <label className="block mb-2 font-medium text-gray-700">Група:</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                    >
                        {groups.map(group => (
                            <option key={group} value={group}>{group}</option>
                        ))}
                    </select>
                </div>

                {/* Week selector */}
                <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
                    <label className="block mb-2 font-medium text-gray-700">Тиждень:</label>
                    <div className="flex gap-2">
                        <button
                            className={`flex-1 py-2 px-4 rounded-md transition ${selectedWeek === 'first' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectedWeek('first')}
                        >
                            Перший тиждень
                        </button>
                        <button
                            className={`flex-1 py-2 px-4 rounded-md transition ${selectedWeek === 'second' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            onClick={() => setSelectedWeek('second')}
                        >
                            Другий тиждень
                        </button>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-4 bg-white rounded-lg shadow-sm p-3">
                <div className="text-sm font-medium mr-2">Типи занять:</div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-100 border border-indigo-300 rounded-sm mr-1"></div>
                    <span className="text-sm">Лекція</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-100 border border-emerald-300 rounded-sm mr-1"></div>
                    <span className="text-sm">Практичне</span>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-amber-100 border border-amber-300 rounded-sm mr-1"></div>
                    <span className="text-sm">Семінар</span>
                </div>
            </div>

            {/* Schedule display */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="p-3 text-left text-gray-600 font-medium text-sm w-20">Час</th>
                        {days.map((day, index) => (
                            <th key={day} className={`p-3 text-left text-gray-600 font-medium text-sm w-1/6 ${index === 2 ? 'bg-blue-50' : ''}`}>
                                {day}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {timeSlots.map((time, timeIndex) => (
                        <tr key={time} className={timeIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="p-3 font-medium text-gray-700 border-r border-gray-100 text-center">{time}</td>
                            {days.map((day, dayIndex) => {
                                const event = scheduleData[selectedGroup]?.[day]?.[time];
                                return (
                                    <td key={day} className={`p-2 align-top ${dayIndex === 2 ? 'bg-blue-50/50' : ''}`}>
                                        {event && <EventCard event={event} />}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-gray-500 text-sm">
                © НАККІМ
            </div>
        </div>
    );
};

export default UniversityScheduleSystem;
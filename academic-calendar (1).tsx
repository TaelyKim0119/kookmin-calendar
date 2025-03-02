import React, { useState } from 'react';
import { 
  GraduationCap, 
  PenTool, 
  ScrollText,
  Calendar,
  Star
} from 'lucide-react';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  
  const eventIcons = {
    entrance: { icon: GraduationCap, label: "입학/졸업", color: "#4C51BF" },
    exam: { icon: PenTool, label: "시험/성적", color: "#E53E3E" },
    paper: { icon: ScrollText, label: "논문", color: "#38A169" },
    registration: { icon: Calendar, label: "등록/신청", color: "#D69E2E" },
    important: { 
      icon: ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="#FFFF00" stroke={color} strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ), 
      label: "중요", 
      color: "#FFA500" 
    }
  };

  // 일정 내용에 따른 아이콘 매핑 함수
  const getEventType = (content) => {
    const types = [];
    
    if (content.includes('입학식') || content.includes('학위수여식') || content.includes('개교')) {
      types.push('entrance');
    }
    if (content.includes('시험') || content.includes('성적')) {
      types.push('exam');
    }
    if (content.includes('논문') || content.includes('청구') || content.includes('지도평가')) {
      types.push('paper');
    }
    if (content.includes('등록') || content.includes('수강신청') || content.includes('휴·복학')) {
      types.push('registration');
    }
    
    // 특정 일정만 중요 표시
    if (content === '2025학년도 전기 종합시험') {
      types.push('important');
    }
    
    return types;
  };

  const months = [
    { num: 3, name: "3월", events: ['entrance', 'registration', 'exam'] },
    { num: 4, name: "4월", events: ['exam', 'paper'] },
    { num: 5, name: "5월", events: [] },
    { num: 6, name: "6월", events: ['exam', 'paper'] },
    { num: 7, name: "7월", events: ['registration', 'paper'] },
    { num: 8, name: "8월", events: ['entrance', 'registration'] },
    { num: 9, name: "9월", events: ['entrance', 'registration', 'exam'] },
    { num: 10, name: "10월", events: ['entrance', 'exam', 'paper'] },
    { num: 11, name: "11월", events: [] },
    { num: 12, name: "12월", events: ['exam', 'paper'] },
    { num: 1, name: "1월", events: ['paper', 'registration'] },
    { num: 2, name: "2월", events: ['entrance', 'registration'] }
  ];

  const calendarData = {
    1: [
      { date: "2026.01.23.(금)", content: "논문 지도평가 및 논문 예비심사 결과보고서 제출", note: "" },
      { date: "2026.01.05.(월)~ 01.16.(금)", content: "2026학년도 1학기 휴·복학 신청 기간", note: "" }
    ],
    2: [
      { date: "2026.02.09.(월)~ 02.25.(수)", content: "2026학년도 1학기 수강신청 기간", note: "" },
      { date: "2026.02.11.(수)", content: "2025학년도 전기 학위수여식", note: "" },
      { date: "2026.02.23.(월)~ 02.27.(금)", content: "2026학년도 1학기 등록 기간", note: "" }
    ],
    3: [
      { date: "2025.03.04.(화)", content: "2025학년도 입학식", note: "" },
      { date: "2025.03.04.(화)", content: "1학기 개강일", note: "" },
      { date: "2025.03.04.(화)~ 03.10.(월)", content: "1학기 수강신청 변경 및 포기 기간", note: "" },
      { date: "2025.03.04.(화)~ 03.19.(목)", content: "2025학년도 1학기 석박사통합과정 중도수료 신청", note: "" },
      { date: "2025.03.04.(화)~ 03.19.(수)", content: "2025학년도 1학기 일반대학원 수업연한 단축신청서 제출", note: "" },
      { date: "2025.03.14.(금)", content: "2025학년도 전기 종합시험", note: "링크" }
    ],
    4: [
      { date: "2025.04.07.(월)~ 04.10.(목)", content: "학위 청구논문 심사요청서 제출", note: "" },
      { date: "2025.04.22.(화)~ 04.28.(월)", content: "1학기 중간시험 기간", note: "수업 8주차" }
    ],
    6: [
      { date: "2025.06.10.(화)~ 06.16.(월)", content: "1학기 기말시험 기간", note: "수업 15주차" },
      { date: "2025.06.17.(화)~ 06.23.(월)", content: "1학기 보강(기말시험 가능)기간", note: "수업결손 보충기간" },
      { date: "2025.06.10.(화)~ 06.24.(화)", content: "1학기 성적 입력 기간", note: "" },
      { date: "2025.06.17.(화)~ 06.27.(금)", content: "1학기 성적 공시 기간", note: "" },
      { date: "2025.06.20.(금)", content: "학위 청구논문 심사결과 제출", note: "" },
      { date: "2025.06.24.(화)", content: "하계방학 시작일", note: "" },
      { date: "2025.06.25.(수)~ 06.27.(금)", content: "1학기 성적 이의신청/정정 기간", note: "" },
      { date: "2025.06.28.(토)", content: "ON국민 시스템 정기 점검일", note: "서비스 이용 일시 중단" }
    ],
    7: [
      { date: "2025.07.08.(화)~ 07.18.(금)", content: "2학기 휴·복학 신청 기간", note: "" },
      { date: "2025.07.25.(금)", content: "논문 지도평가 및 논문 예비심사 결과보고서 제출", note: "" }
    ],
    8: [
      { date: "2025.08.13.(수)~ 08.27.(수)", content: "2학기 수강신청 기간", note: "" },
      { date: "2025.08.20.(수)", content: "2024학년도 후기 학위수여식", note: "" },
      { date: "2025.08.25.(월) ~ 08.29.(금)", content: "2학기 등록기간", note: "" }
    ],
    9: [
      { date: "2025.09.01.(월)", content: "제79회 개교일", note: "" },
      { date: "2025.09.01.(월)", content: "2학기 개강일", note: "" },
      { date: "2025.09.01.(월)~ 09.05.(금)", content: "2학기 수강신청 변경 및 포기 기간", note: "" },
      { date: "9월 중", content: "후기 종합시험 및 외국어 시험 면제 신청", note: "종합시험 학과 시행" }
    ],
    10: [
      { date: "2025.10.13.(월)~ 10.16.(목)", content: "학위 청구논문 심사요청서 제출", note: "" },
      { date: "2025.10.18.(토)", content: "개교 79주년 기념일", note: "" },
      { date: "2025.10.20.(월)~ 10.25.(토)", content: "2학기 중간시험 기간", note: "수업 8주차" }
    ],
    12: [
      { date: "2025.12.08.(월)~ 12.13.(토)", content: "2학기 기말시험 기간", note: "수업 15주차" },
      { date: "2025.12.15.(월)~ 12.20.(토)", content: "2학기 보강(기말시험 가능) 기간", note: "수업결손 보충기간" },
      { date: "2025.12.08.(월)~ 12.22.(월)", content: "2학기 성적 입력 기간", note: "" },
      { date: "2025.12.15.(월)~ 12.26.(금)", content: "2학기 성적 공시 기간", note: "" },
      { date: "2025.12.24.(금)", content: "학위 청구논문 심사결과 제출", note: "" },
      { date: "2025.12.22.(월)", content: "동계방학 시작일", note: "" },
      { date: "2025.12.23.(화)~ 12.26.(금)", content: "2학기 성적 이의신청/정정 기간", note: "" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 rounded-t-lg">
            <div className="text-center">
              <h2 className="text-blue-100 text-lg font-light mb-2">KOOKMIN UNIVERSITY</h2>
              <h1 className="text-white text-3xl font-bold tracking-wide mb-1">
                2025 학년도 일반대학원 학사일정
              </h1>
              <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          
          <div className="p-6">
            {/* Icons Legend */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex gap-6 justify-center">
                {Object.entries(eventIcons).map(([key, { icon: Icon, label, color }]) => (
                  <div key={key} className="flex items-center gap-2 text-sm">
                    <Icon size={16} color={color} />
                    <span className={`${key === 'important' ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Month Buttons - 2 rows, 6 columns */}
            <div className="grid grid-rows-2 grid-cols-6 gap-4 mb-8">
              {months.map((month) => (
                <button
                  key={month.num}
                  onClick={() => setSelectedMonth(month.num)}
                  className={`
                    relative p-4 rounded-lg
                    ${selectedMonth === month.num ? 'bg-blue-600 text-white' : 'bg-gray-100'}
                    hover:bg-blue-500 hover:text-white transition-colors
                  `}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold mb-2">{month.name}</span>
                    {month.events.length > 0 && (
                      <div className="flex gap-1 mt-1 flex-wrap justify-center">
                        {month.events.map((event) => {
                          const { icon: EventIcon, color } = eventIcons[event];
                          return (
                            <EventIcon 
                              key={event} 
                              size={16}
                              color={selectedMonth === month.num ? 'white' : color}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Calendar View */}
            {selectedMonth && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">{selectedMonth}월 학사일정</h2>
                {calendarData[selectedMonth] ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-4 text-left w-1/4">일자</th>
                          <th className="border p-4 text-left w-1/2">내용</th>
                          <th className="border p-4 text-left w-1/4">비고</th>
                        </tr>
                      </thead>
                      <tbody>
                        {calendarData[selectedMonth].map((item, index) => {
                          const eventTypes = getEventType(item.content);
                          
                          return (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border p-4 font-medium">{item.date}</td>
                              <td className="border p-4">
                                <div className="flex items-center gap-2">
                                  {eventTypes.map((type, i) => {
                                    const { icon: EventIcon, color } = eventIcons[type];
                                    return (
                                      <EventIcon key={`${index}-${i}`} size={16} color={color} />
                                    );
                                  })}
                                  <span>{item.content}</span>
                                </div>
                              </td>
                              <td className="border p-4">{item.note}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">해당 월의 일정이 없습니다.</p>
                )}
              </div>
            )}
            
            <div className="mt-4 text-sm text-gray-500">
              ※ 상기 일정은 대학원 사정에 따라 변경될 수 있음
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
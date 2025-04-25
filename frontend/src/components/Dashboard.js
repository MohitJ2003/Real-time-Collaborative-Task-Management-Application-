import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling

import { 
    FaTasks, 
    FaHome, 
    FaUsers, 
    FaChartPie, 
    FaCog, 
    FaChevronDown, 
    FaSearch, 
    FaFilter, 
    FaPlus, 
    FaArrowUp, 
    FaArrowDown, 
    FaCalendar,
    FaListUl,
    FaEllipsisV,
  } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="logo">
                    <FaTasks />
                    <span>TaskFlow</span>
                </div>
                <div className="nav-menu">
                    <a href="#" className="nav-item active">
                        <FaHome />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FaListUl />
                        <span>My Tasks</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FaUsers />
                        <span>Team</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FaCalendar />
                        <span>Calendar</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FaChartPie />
                        <span>Reports</span>
                    </a>
                    <a href="#" className="nav-item">
                        <FaCog />
                        <span>Settings</span>
                    </a>
                </div>
                <div className="user-profile">
                    <div className="user-avatar">JD</div>
                    <div className="user-info">
                        <div className="user-name">John Doe</div>
                        <div className="user-email">john@example.com</div>
                    </div>
                    <FaChevronDown />
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <h1 className="page-title">Dashboard</h1>
                    <div className="search-bar">
                        <FaSearch />
                        <input type="text" placeholder="Search tasks, projects..." />
                    </div>
                    <div className="action-buttons">
                        <button className="btn btn-outline">
                            <FaFilter />
                            <span>Filter</span>
                        </button>
                        <button className="btn btn-primary">
                            <FaPlus />
                            <span>New Task</span>
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-title">Total Tasks</div>
                        <div className="stat-value">124</div>
                        <div className="stat-change up">
                            <FaArrowUp />
                            <span>12% from last week</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-title">Completed</div>
                        <div className="stat-value">89</div>
                        <div className="stat-change up">
                            <FaArrowUp />
                            <span>8% from last week</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-title">Overdue</div>
                        <div className="stat-value">15</div>
                        <div className="stat-change down">
                            <FaArrowDown />
                            <span>5% from last week</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-title">Team Members</div>
                        <div className="stat-value">24</div>
                        <div className="stat-change up">
                            <FaArrowUp />
                            <span>2 new members</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    {/* Task Board */}
                    <div className="task-board">
                        <div className="board-header">
                            <h2 className="board-title">Project: Website Redesign</h2>
                            <div className="board-actions">
                                <button className="btn btn-outline">
                                    <FaEllipsisV />
                                </button>
                                <button className="btn btn-primary">
                                    <FaPlus />
                                    <span>Add Task</span>
                                </button>
                            </div>
                        </div>
                        <div className="task-columns">
                            {/* Backlog Column */}
                            <div className="task-column">
                                <div className="column-header">
                                    <h3 className="column-title">Backlog</h3>
                                    <span className="task-count">8</span>
                                </div>
                                <div className="task-list" id="backlog-column">
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Create wireframes</h4>
                                        <p className="task-desc">Design low-fidelity wireframes for all main pages</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">AM</div>
                                                <div className="assignee-avatar">+2</div>
                                            </div>
                                            <span className="task-priority priority-high">High</span>
                                        </div>
                                    </div>
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Content audit</h4>
                                        <p className="task-desc">Review all existing content and identify what to keep/update</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">JD</div>
                                            </div>
                                            <span className="task-priority priority-medium">Medium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* To Do Column */}
                            <div className="task-column">
                                <div className="column-header">
                                    <h3 className="column-title">To Do</h3>
                                    <span className="task-count">5</span>
                                </div>
                                <div className="task-list" id="todo-column">
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">UI Design - Homepage</h4>
                                        <p className="task-desc">Create high-fidelity mockups for the homepage</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">SM</div>
                                            </div>
                                            <span className="task-priority priority-high">High</span>
                                        </div>
                                    </div>
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Set up analytics</h4>
                                        <p className="task-desc">Configure Google Analytics and tracking events</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">TP</div>
                                            </div>
                                            <span className="task-priority priority-medium">Medium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* In Progress Column */}
                            <div className="task-column">
                                <div className="column-header">
                                    <h3 className="column-title">In Progress</h3>
                                    <span className="task-count">3</span>
                                </div>
                                <div className="task-list" id="progress-column">
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Develop header component</h4>
                                        <p className="task-desc">Implement responsive header with navigation</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">RK</div>
                                                <div className="assignee-avatar">AL</div>
                                            </div>
                                            <span className="task-priority priority-high">High</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Done Column */}
                            <div className="task-column">
                                <div className="column-header">
                                    <h3 className="column-title">Done</h3>
                                    <span className="task-count">12</span>
                                </div>
                                <div className="task-list" id="done-column">
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Project kickoff meeting</h4>
                                        <p className="task-desc">Hold initial meeting with all stakeholders</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">JD</div>
                                                <div className="assignee-avatar">SM</div>
                                            </div>
                                            <span className="task-priority priority-low">Low</span>
                                        </div>
                                    </div>
                                    <div className="task-card" draggable="true">
                                        <h4 className="task-title">Competitor analysis</h4>
                                        <p className="task-desc">Research and document competitor websites</p>
                                        <div className="task-footer">
                                            <div className="task-assignees">
                                                <div className="assignee-avatar">AM</div>
                                            </div>
                                            <span className="task-priority priority-medium">Medium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="right-sidebar">
                        {/* Activity Feed */}
                        <div className="activity-feed">
                            <div className="activity-header">
                                <h2 className="activity-title">Recent Activity</h2>
                                <button className="btn btn-outline">
                                    <FaEllipsisV />
                                </button>
                            </div>
                            <div className="activity-list">
                                <div className="activity-item">
                                    <div className="activity-avatar">SM</div>
                                    <div className="activity-content">
                                        <div className="activity-user">Sarah Miller</div>
                                        <div className="activity-action">moved "UI Design - Homepage" to In Progress</div>
                                        <div className="activity-time">15 minutes ago</div>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-avatar">RK</div>
                                    <div className="activity-content">
                                        <div className="activity-user">Raj Kumar</div>
                                        <div className="activity-action">commented on "Develop header component"</div>
                                        <div className="activity-time">1 hour ago</div>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-avatar">TP</div>
                                    <div className="activity-content">
                                        <div className="activity-user">Taylor Park</div>
                                        <div className="activity-action">completed "Competitor analysis"</div>
                                        <div className="activity-time">2 hours ago</div>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-avatar">AM</div>
                                    <div className="activity-content">
                                        <div className="activity-user">Alex Morgan</div>
                                        <div className="activity-action">created "Content audit" task</div>
                                        <div className="activity-time">Yesterday, 4:32 PM</div>
                                    </div>
                                </div>
                                <div className="activity-item">
                                    <div className="activity-avatar">JD</div>
                                    <div className="activity-content">
                                        <div className="activity-user">John Doe</div>
                                        <div className="activity-action">assigned you to "Set up analytics"</div>
                                        <div className="activity-time">Yesterday, 3:15 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Members */}
                        <div className="team-members">
                            <div className="team-header">
                                <h2 className="team-title">Team Members</h2>
                                <button className="btn btn-outline">
                                    <FaEllipsisV />
                                </button>
                            </div>
                            <div className="member-list">
                                <div className="member-card">
                                    <div className="member-avatar">JD</div>
                                    <div className="member-info">
                                        <div className="member-name">John Doe</div>
                                        <div className="member-role">Project Manager</div>
                                    </div>
                                    <div className="member-status"></div>
                                </div>
                                <div className="member-card">
                                    <div className="member-avatar">SM</div>
                                    <div className="member-info">
                                        <div className="member-name">Sarah Miller</div>
                                        <div className="member-role">UI Designer</div>
                                    </div>
                                    <div className="member-status"></div>
                                </div>
                                <div className="member-card">
                                    <div className="member-avatar">RK</div>
                                    <div className="member-info">
                                        <div className="member-name">Raj Kumar</div>
                                        <div className="member-role">Frontend Developer</div>
                                    </div>
                                    <div className="member-status"></div>
                                </div>
                                <div className="member-card">
                                    <div className="member-avatar">TP</div>
                                    <div className="member-info">
                                        <div className="member-name">Taylor Park</div>
                                        <div className="member-role">Content Strategist</div>
                                    </div>
                                    <div className="member-status offline"></div>
                                </div>
                                <div className="member-card">
                                    <div className="member-avatar">AM</div>
                                    <div className="member-info">
                                        <div className="member-name">Alex Morgan</div>
                                        <div className="member-role">UX Designer</div>
                                    </div>
                                    <div className="member-status"></div>
                                </div>
                                <div className="member-card">
                                    <div className="member-avatar">AL</div>
                                    <div className="member-info">
                                        <div className="member-name">Anna Lee</div>
                                        <div className="member-role">Frontend Developer</div>
                                    </div>
                                    <div className="member-status offline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
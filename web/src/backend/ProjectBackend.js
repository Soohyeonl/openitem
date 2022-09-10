import * as Setting from "../Setting";

export function GetDetailedInfo(pid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/detailed?:pid=${pid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function GetBasicInfo(pid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/basic?:pid=${pid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function UpdateProjectInfo() {
  return fetch(`${Setting.ServerUrl}/api/review/proj`, {
    method: "PUT",
    credentials: "include",
  }).then(res => res.json());
}

export function CreatTemplateProject(data) {
  let project = new Object();
  project.basic_info = data;
  project.name = data.name;
  return fetch(`${Setting.ServerUrl}/api/review/proj/template`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(project),
  }).then(res => res.json());
}

export function CreateEmptyProject() {
  return fetch(`${Setting.ServerUrl}/api/review/proj`, {
    method: "POST",
    credentials: "include",
  }).then(res => res.json());
}

export function GetUserAssignments(uid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/user?:uid=${uid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function GetProjectList(id_list) {
  let data = new Object();
  data.id_list = id_list;
  return fetch(`${Setting.ServerUrl}/api/review/query/proj`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export function GetProjectAssignments(pid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/assign?:pid=${pid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function GetUserList(id_list) {
  let data = new Object();
  data.id_list = id_list;
  return fetch(`${Setting.ServerUrl}/api/review/query/user`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export function MakeOneAssignment(data) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/assign`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export function ChangeAssignment(data) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/assign`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export function RemoveAssignment(aid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/assign?:aid=${aid}`, {
    method: "DELETE",
    credentials: "include",
  }).then(res => res.json());
}

export function GetProjectTempTestpaper(pid) {
  return fetch(`${Setting.ServerUrl}/api/qbank/testpaper/proj_t/?:pid=${pid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function MakeOneTpAssignment(data) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/tpassign`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export function GetOneTpAssignment(tid) {
  return fetch(`${Setting.ServerUrl}/api/review/proj/tpassign?:tid=${tid}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

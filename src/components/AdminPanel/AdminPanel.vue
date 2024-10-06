<template>
  <div class="admin-panel">
    <h2 class="text-3xl font-bold mb-4">Admin Panel</h2>
    <div class="tabs mb-6">
      <button @click="activeTab = 'manageUsers'" class="tab-button">Manage Users</button>
      <button @click="activeTab = 'checkInOut'" class="tab-button">Check In/Out Records</button>
      <button @click="activeTab = 'leaveRequests'" class="tab-button">Leave Requests</button>
      <button @click="activeTab = 'announcement'" class="tab-button">Announcement</button>
    </div>
    
    <div v-if="activeTab === 'manageUsers'">
      <ManageUsers />
    </div>
    <div v-if="activeTab === 'checkInOut'">
      <CheckInOutRecords />
    </div>
    <div v-if="activeTab === 'leaveRequests'">
      <LeaveRequests />
    </div>
    <div v-if="activeTab === 'announcement'">
      <Announcement />
    </div>
  </div>
</template>

<script>
    import ManageUsers from "./ManageUsers.vue";
    import CheckInOutRecords from "./CheckInOutRecords.vue";
    import LeaveRequests from "./LeaveRequests.vue";
    import Announcement from "./Announcement.vue";

    export default {
        data() {
            return {
                activeTab: 'manageUsers',
            };
        },
        components: {
            ManageUsers,
            CheckInOutRecords,
            LeaveRequests,
            Announcement,
        },
    };
</script>

<style scoped>
.admin-panel {
  padding: 20px;
}
.tabs {
  margin: 10px 0;
}
.tab-button {
  margin-right: 10px;
  padding: 10px;
  background-color: #3490dc;
  color: white;
  cursor: pointer;
}
</style>
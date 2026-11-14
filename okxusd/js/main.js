// 下拉选择框通用逻辑
document.addEventListener('click', function(e) {
    if (!e.target.closest('.select-wrapper')) {
        document.querySelectorAll('.select-dropdown').forEach(d => d.classList.remove('show'));
    }
});

function toggleDropdown(id) {
    document.querySelectorAll('.select-dropdown').forEach(d => {
        if (d.id !== id) d.classList.remove('show');
    });
    document.getElementById(id).classList.toggle('show');
}

function selectOption(selectId, dropdownId, value) {
    document.getElementById(selectId).innerHTML = value + ' <span>▼</span>';
    document.getElementById(dropdownId).classList.remove('show');
}

// 上传弹窗
function showUploadMenu() {
    document.getElementById('upload-modal').classList.add('show');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// 用户下拉菜单
function toggleUserMenu() {
    document.getElementById('user-dropdown').classList.toggle('show');
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.top-actions') && !e.target.closest('.user-dropdown')) {
        const menu = document.getElementById('user-dropdown');
        if (menu) menu.classList.remove('show');
    }
});

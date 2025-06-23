function toggleTableSyllabus(syllabusId) {
    const syllabusRow = document.getElementById(syllabusId);
    const allSyllabusRows = document.querySelectorAll('.syllabus-row');
    const allSubjectLinks = document.querySelectorAll('.subject-link');
    allSyllabusRows.forEach(row => {
        if (row.id !== syllabusId && row.style.display === 'table-row') {
            row.style.display = 'none';
        }
    });
    allSubjectLinks.forEach(link => {
        if (!link.onclick.toString().includes(syllabusId)) {
            link.innerHTML = link.innerHTML.replace('▲', '▼');
        }
    });
    if (syllabusRow.style.display === 'none' || syllabusRow.style.display === '') {
        syllabusRow.style.display = 'table-row';
        const currentLink = document.querySelector(`[onclick="toggleTableSyllabus('${syllabusId}')"]`);
        currentLink.innerHTML = currentLink.innerHTML.replace('▼', '▲');
    } else {
        syllabusRow.style.display = 'none';
        const currentLink = document.querySelector(`[onclick="toggleTableSyllabus('${syllabusId}')"]`);
        currentLink.innerHTML = currentLink.innerHTML.replace('▲', '▼');
    }
}
 function toggleTableSyllabus(id) {
      const row = document.getElementById(id);
      row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
    }
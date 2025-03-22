/**
 * Утилиты для работы с ULID
 */

/**
 * Проверяет, является ли строка ULID
 * ULID имеет формат: 26 символов, состоящих из цифр и букв A-Z (в верхнем регистре)
 * @param {string} id - Идентификатор для проверки
 * @returns {boolean} - true, если id является ULID
 */
export function isULID(id) {
	if (!id || typeof id !== 'string') return false;

	// ULID имеет длину 26 символов
	if (id.length !== 26) return false;

	// ULID содержит только цифры и буквы A-Z в верхнем регистре
	return /^[0-9A-Z]+$/.test(id);
}

/**
 * Извлекает временную метку из ULID
 * Первые 10 символов ULID представляют собой временную метку в миллисекундах
 * @param {string} ulid - ULID для извлечения временной метки
 * @returns {number} - Временная метка в миллисекундах или 0, если не удалось извлечь
 */
export function getTimestampFromULID(ulid) {
	if (!isULID(ulid)) return 0;

	// Первые 10 символов ULID - это временная метка в миллисекундах в кодировке Crockford's Base32
	const timestampPart = ulid.substring(0, 10);

	try {
		// Преобразуем из Base32 в десятичное число
		let timestamp = 0;
		for (let i = 0; i < timestampPart.length; i++) {
			const char = timestampPart[i];
			const value = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'.indexOf(char);
			if (value === -1) return 0; // Некорректный символ
			timestamp = timestamp * 32 + value;
		}
		return timestamp;
	} catch (e) {
		return 0;
	}
}

/**
 * Сортирует массив объектов по временной метке в ULID
 * @param {Array} items - Массив объектов с полем id
 * @param {string} idField - Имя поля, содержащего ULID (по умолчанию 'id')
 * @param {boolean} descending - Сортировать по убыванию (новые сначала)
 * @returns {Array} - Отсортированный массив
 */
export function sortByULID(items, idField = 'id', descending = true) {
	if (!Array.isArray(items)) return items;

	// Создаем копию массива, чтобы не изменять оригинал
	const sortedItems = [...items];

	return sortedItems.sort((a, b) => {
		const idA = a[idField];
		const idB = b[idField];

		// Проверяем, являются ли оба ID ULID
		const isAUlid = isULID(idA);
		const isBUlid = isULID(idB);

		// Если оба ID - ULID, сортируем по временной метке
		if (isAUlid && isBUlid) {
			const timestampA = getTimestampFromULID(idA);
			const timestampB = getTimestampFromULID(idB);

			return descending ? timestampB - timestampA : timestampA - timestampB;
		}

		// Если только один ID - ULID, помещаем его выше/ниже
		if (isAUlid) return descending ? -1 : 1;
		if (isBUlid) return descending ? 1 : -1;

		// Если ни один не ULID, сохраняем исходный порядок
		return 0;
	});
}

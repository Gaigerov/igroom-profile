```markdown
# Igroom Profile Application

Профильное приложение для платформы Igroom, построенное на Next.js с использованием:
- Redux Toolkit для управления состоянием
- React Query для асинхронных запросов
- Tailwind CSS для стилизации
- Docker для контейнеризации

## Требования
- Docker (версия 20.10+)
- Docker Compose (опционально)

## Запуск приложения

### 1. Используя Docker Compose (рекомендуется)

```bash
docker compose up --build
```

После сборки приложение будет доступно по адресу:  
http://localhost:3000

### 2. Используя только Docker

```bash
# Сборка образа
docker build -t igroom-profile .

# Запуск контейнера
docker run -p 3000:3000 igroom-profile
```

### 3. Запуск готового образа из Docker Hub

```bash
docker run -p 3000:3000 gaigerov/igroom-profile
```

### 4. Локальный запуск (без Docker)

```bash
npm install
npm run build
npm start
```

## Структура проекта

```
├── src/                      # Исходный код
│   ├── app/                  # Роутинг Next.js
│   ├── entities/             # Бизнес-сущности
│   ├── features/             # Функциональные сценарии
│   ├── shared/               # Общие компоненты и утилиты
│   ├── widgets/              # UI виджеты
├── public/                   # Статические ресурсы
├── docker-compose.yml        # Docker Compose конфигурация
├── Dockerfile                # Docker конфигурация
├── next.config.js            # Конфигурация Next.js
└── package.json              # Зависимости и скрипты
```

## Особенности реализации

1. **Оптимизированные шрифты**:  
   Используется next/font для автоматической оптимизации шрифтов SF Pro Display
   
2. **SSR с Redux**:  
   Предзагрузка состояния профиля на сервере и гидрация на клиенте

3. **Адаптивная верстка**:  
   Полная поддержка мобильных устройств и планшетов

4. **Обработка ошибок**:  
   Автоматический переход на мок-данные при ошибках API

## Профиль пользователя

Приложение отображает:
- Аватар пользователя
- Основную информацию (имя, никнейм, город)
- Статистику (месяцы, встречи, румеры)
- Интерактивные элементы управления
- Секции меню профиля

## Деплой

Образ доступен на Docker Hub:  
https://hub.docker.com/r/gaigerov/igroom-profile

Для обновления образа:
```bash
docker build -t gaigerov/igroom-profile .
docker push gaigerov/igroom-profile
```

## Техподдержка

При возникновении проблем:
1. Проверьте наличие последней версии Docker
2. Очистите кэш сборки: `docker builder prune`
3. Убедитесь, что порт 3000 свободен
4. Для диагностики ошибок просмотрите логи:  
   `docker compose logs -f`

Лицензия: MIT
```

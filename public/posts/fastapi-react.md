# Connecting FastAPI and React with Zero Code

Связка React на фронтенде и FastAPI (Python) на бэкенде — это, пожалуй, самый популярный и мощный стек для AI-стартапов сегодня. 

Но давайте вспомним, сколько рутины нужно сделать, чтобы просто отправить "Hello World" с бэкенда на клиент.

## Ад настройки (Как мы делали это раньше)
1. Создать виртуальное окружение Python.
2. Установить FastAPI и Uvicorn.
3. Настроить `CORSMiddleware`, потому что React крутится на порту 5173, а FastAPI на 8000.
4. Написать эндпоинт.
5. На фронтенде установить `axios` или писать `fetch`.
6. Сделать обработку состояний (loading, error, success).

Это занимает как минимум 30-40 минут скучнейшей работы. 

## Магия CRUSH AI (Как мы делаем это теперь)
В нашем визуальном редакторе эта задача решается за **5 секунд**. 

Вы просто добавляете на холст ноду `React App` и ноду `FastAPI Backend`, а затем соединяете их линией. CRUSH AI мгновенно генерирует полностью готовый к работе код.

Вот как выглядит автоматически сгенерированный роутер на стороне Python:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CRUSH AI Auto-Generated API")

# Оркестратор сам понял, откуда придут запросы и настроил CORS!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "success", "message": "CRUSH AI Backend is running!"}
```

А на стороне React ИИ сразу создает типизированный хук для получения этих данных. Вы просто нажимаете "Deploy", и ваша архитектура разворачивается в облаке. 

Меньше времени на инфраструктуру — больше времени на создание реальной ценности для пользователей.